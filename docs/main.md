##Documentación general del proyecto

###Colaboradores
* Diego Montoya (DM)
* Hans Burbano (HB)

###Idea

####Descripción general del proyecto - Responsable (DM-HB)
Este proyecto pretende construir una aplicación para la composición en linea mediante clips de sonidos que podrán ser subidos por el usuario.
Las funcionalidad para implementar en la aplicación serán:

- [ ] Login
- [ ] Registro
- [ ] Recuperación de contraseña (O)
- [ ] Agregar un nuevo clip de sonido
- [ ] Adicionar una nueva pista
- [ ] Adicionar un clip a una pista en un determinado tiempo
- [ ] Silenciar una pista (O)

*(O) - Característica opcional*

####Objetivos - Responsable (DM)
Información sobre los objetivos


####Benchmarking - Responsable (DM)
Información sobre el benchmarking



####Tecnologías a utilizar - Responsable (DM-HB)

<table>
  <thead>
    <tr>
      <th>Front end<br>Hans Burbano</th>
      <th>Back end<br>Diego Montoya</th>
      <th>Base de datos<br>Hans Burbano</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML5</td>
      <td>PHP</td>
      <td>MySQL</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Yii</td>
      <td></td>
    </tr>
    <tr>
      <td>jQuery</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Twitter BS</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>CSS</td>
      <td></td>
      <td></td>
    </tr>  
    <tr>
      <td colspan="2" align="center">REST - JSON</td>
      <td></td>
    </tr>   
  </tbody>
</table>

######Front end
Con el conjunto de herramientas anteriormente descritas se desarrollara una aplicación permitirá al usuario mezclar archivos de audio sin la necesidad de instalar ningún plugin adicional.
<br>*El alcance del proyecto en cuanto a compatibilidad de navegadores esta limitado a funcionar en la ultima versión de Google Chrome.*

######Back end
Se piensa implementar mediante Yii una API rest con la funcionalidad requerida.

######Bases de datos
Para la información correspondiente a la mezcla de pista y como estas se encuentran organizadas en una composición se piensa utilizar MySQL.  


###Diseño

####Mapas de Navegación - Resposable (HB)
Mapas de navegación

- [ ] Pagina de inicio a dos columnas
  - [ ] Login
      - [ ] Recuperar contraseña 
  - [ ] Registro
- [ ] Aplicacion
  - [ ]   


####Mockups - Resposable (HB)

###### Pagina del login
![](media/Index.png)
###### Pagina del la aplicación
![](media/App.png)
####Diagrama de Despliegue - Resposable (DM)
Seria solo el navegador con su aplicacion, el servidor con PHP y ahi mismo la base de datos.

####Biliografia
