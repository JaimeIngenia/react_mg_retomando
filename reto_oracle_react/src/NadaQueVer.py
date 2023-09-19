#!/usr/bin/env python3
import cv2
import rclpy
import numpy as np
from rclpy.node import Node
from cv_bridge import CvBridge
from sensor_msgs.msg import Image

class Camara(Node):
    def __init__(self):#constructor de camara
        super().__init__('acceso_camara')#sudo es el constructor del padre
	  #Inicializar variables
        self.image = []
        self.bridge = CvBridge()#es una instancia de CvBridge
        self.EstadoInicial = False
	  #Crear suscriptores 
        self.suscriptor = self.create_subscription(Image, '/camera/image_raw', self.visual_imagen, 10)
        self.updateTimer = self.create_timer(0.010, self.updateCallback)
        self.get_logger().info("Uso de la camara para el seguimiento de carril")
    #Funciones importantes 
    def visual_imagen(self, msg):
        self.image = msg
        self.cvImage = self.bridge.imgmsg_to_cv2(self.image, "bgr8")
        self.EstadoInicial = True
        cv2.imshow('Imagen', self.cvImage)
        cv2.waitKey(1) 

    def updateCallback(self):
        if self.EstadoInicial is True:
            self.detectLane()       

    def detectLane(self):
        cutImg = self.cvImage
        whiteFraction, whiteLane, whiteLaneRGB = self.maskWhiteLane(cutImg)
        yellowFraction, yellowLane, yellowLaneRGB = self.maskYellowLane(cutImg)

        try:
            if yellowFraction > 50:
                self.leftFitx, self.leftFit = self.slidingWindow(yellowLane, 'left')
                self.movAvgLeft = np.array([self.leftFit])

            if whiteFraction > 50:
                self.rightFitx, self.rightFit = self.slidingWindow(whiteLane, 'right')
                self.movAvgRight = np.array([self.rightFit])
        except:
            pass

        final = self.makeLane(cutImg)
        
        cv2.imshow('image', cutImg)
        #cv2.imshow('white lane', whiteLaneRGB)
        #cv2.imshow('yellow lane', yellowLaneRGB)
        cv2.imshow('final lane', final)
        cv2.waitKey(1)
        
    def maskWhiteLane(self, image):
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        hueL = 0
        hueH = 25
        saturationL = 0
        saturationH = 36
        lightnessL = 180
        lightnessH = 255

        lowerWhite = np.array([hueL, saturationL, lightnessL])
        upperWhite = np.array([hueH, saturationH, lightnessH])
        mask = cv2.inRange(hsv, lowerWhite, upperWhite)
        res = cv2.bitwise_and(image, image, mask=mask)

        fractionNum = np.count_nonzero(mask)

        return fractionNum, mask, res

    def maskYellowLane(self, image):
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
        
        hueL = 27
        hueH = 41
        saturationL = 130
        saturationH = 255
        lightnessL = 186
        lightnessH = 255

        lowerYellow = np.array([hueL, saturationL, lightnessL])
        upperYellow = np.array([hueH, saturationH, lightnessH])
        mask = cv2.inRange(hsv, lowerYellow, upperYellow)
        res = cv2.bitwise_and(image, image, mask = mask)

        fractionNum = np.count_nonzero(mask)

        return fractionNum, mask, res

    def slidingWindow(self, imgW, leftOrRight):
        histogram = np.sum(imgW[imgW.shape[0] // 2:, :], axis=0)
        # Creamos una imagen de salida donde observar el resultado
        outImg = np.dstack((imgW, imgW, imgW)) * 255
        # Buscamos el pico o punta de las mitades derechas e izquierdas en el histograma
        # Estas van a ser el punto de partida para las lineas izquierda y derecha
        midpoint = np.int(histogram.shape[0] // 2)

        if leftOrRight == 'left':
            laneBase = np.argmax(histogram[:midpoint])
        elif leftOrRight == 'right':
            laneBase = np.argmax(histogram[midpoint:]) + midpoint
        
        # Definimos la cantidad de ventanas deslizantes
        nwindows = 50
        
        # Definimos el alto de las ventanas
        windowHeight = np.int(imgW.shape[0] / nwindows)
        
        # Identificamos las posiciones xy de todos los pixeles en la imagen que no tienen un valor de 0
        nonzero = imgW.nonzero()
        nonzeroy = np.array(nonzero[0])
        nonzerox = np.array(nonzero[1])
        
        # Posiciones actuales que seran actualizadas para cada ventana
        xCurrent = laneBase

        # Definimos el ancho de las ventanas +/- margin
        margin = 50

        # Definimos la cantidad minima de pixeles encontrados para re ubicar la ventana
        minpix = 50

        # Creamos una lista vacia para recibir los indices de los pixeles que componen el carril
        laneInds = []

        # Pasamos por las ventanas una por una
        for window in range(nwindows):
            # Identificamos los limites en las coordenadas xy
            winYLow = imgW.shape[0] - (window + 1) * windowHeight
            winYHigh = imgW.shape[0] - window * windowHeight
            winXLow = xCurrent - margin
            winXHigh = xCurrent + margin

            # Dibujamos las ventanas en la imagen de salida o visualziacion
            cv2.rectangle(outImg, (winXLow, winYLow), (winXHigh, winYHigh), (0, 255, 0), 2)
            
            # Identificamos los pixeles que no son 0 en las coordenadas xy dentro de la ventana
            goodlaneInds = ((nonzeroy >= winYLow) & (nonzeroy < winYHigh) & (nonzerox >= winXLow) & (
                nonzerox < winXHigh)).nonzero()[0]

            # Agregamos estos indices a la lista
            laneInds.append(goodlaneInds)

            # Si se encuentra una mayor cantidad de minpix entonces se reubica el centro de la ventana
            # en su posicion media
            if len(goodlaneInds) > minpix:
                xCurrent = np.int(np.mean(nonzerox[goodlaneInds]))
                
            
        #cv2.imshow('imgW', imgW)
        #cv2.imshow('outImg', outImg)
        #cv2.waitKey(1)
            

        # Concatenamos el arreglo de los indices
        laneInds = np.concatenate(laneInds)

        # Extraemos la posicion de los pixeles de la linea
        x = nonzerox[laneInds]
        y = nonzeroy[laneInds]

        # Ajustamos una funcion polinomica de segundo orden a cada una
        try:
            laneFit = np.polyfit(y, x, 2)
            laneFitBef = laneFit
        except:
            laneFit = laneFitBef

        # Generamos los valores de las coordenadas xy para graficar
        ploty = np.linspace(0, imgW.shape[0] - 1, imgW.shape[0])
        laneFitx = laneFit[0] * ploty ** 2 + laneFit[1] * ploty + laneFit[2]

        return laneFitx, laneFit

    def makeLane(self, cvImg):
        # Creamos una imagen donde dibujar las lineas
        warpZero = np.zeros((cvImg.shape[0], cvImg.shape[1], 1), dtype=np.uint8)

        colorWarp = np.dstack((warpZero, warpZero, warpZero))
        colorWarpLines = np.dstack((warpZero, warpZero, warpZero))

        # Creamos un vector de las posibles coordenadas en y que puede tomar el carril
        ploty = np.linspace(0, cvImg.shape[0] - 1, cvImg.shape[0])

        # Obtenemos los puntos de la linea izquierda del carril y lo dibujamos sobre la imagen
        ptsLeft = np.array([np.flipud(np.transpose(np.vstack([self.leftFitx, ploty])))])
        cv2.polylines(colorWarpLines, np.int_([ptsLeft]), isClosed=False, color=(0, 0, 255), thickness=25)
   
        # Obtenemos los puntos de la linea derecha del carril y lo dibujamos sobre la imagen
        ptsRight = np.array([np.transpose(np.vstack([self.rightFitx, ploty]))])
        cv2.polylines(colorWarpLines, np.int_([ptsRight]), isClosed=False, color=(255, 255, 0), thickness=25)
  
        # Calculamos el centro del carril con base a los ajustes realizados sobre las lineas izquierda y derecha
        centerx = np.mean([self.leftFitx, self.rightFitx], axis=0)
        pts = np.hstack((ptsLeft, ptsRight))
        ptsCenter = np.array([np.transpose(np.vstack([centerx, ploty]))])
        
        # Dibujamos el carril sobre los limites encontrados con anterioridad
        cv2.polylines(colorWarpLines, np.int_([ptsCenter]), isClosed=False, color=(255, 0, 255), thickness=12)
        cv2.fillPoly(colorWarp, np.int_([pts]), (255, 0, 255))
 
        # Combinamos los resultados con la imagen original
        final = cv2.addWeighted(cvImg, 1, colorWarp, 0.2, 0)
     
        final = cv2.addWeighted(final, 1, colorWarpLines, 1, 0)

        return final

def main(args = None):
    rclpy.init(args=args)
    nodo = Camara()
    rclpy.spin(nodo)
    nodo.destroy_node()
    rclpy.shutdown()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()