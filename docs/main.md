## Documentación general del proyecto

### Tabla de contenidos

<!-- MarkdownTOC depth=0 -->

- Colaboradores
- Idea
  - Descripción general del proyecto - Responsable (DM-HB)
  - Objetivos - Responsable (DM)
  - Benchmarking - Responsable (DM)
  - Tecnologías a utilizar - Responsable (DM-HB)
    - Front end
    - Back end
    - Bases de datos
- Diseño
  - Mapas de Navegación - Responsable (HB)
  - Mockups - Responsable (HB)
    - Pagina del login
    - Pagina del la aplicación
    - Diagrama de Despliegue - Responsable (DM)
    - Bibliografía

<!-- /MarkdownTOC -->


### Colaboradores
* Diego Montoya (DM)
* Hans Burbano (HB)

### Idea

#### Descripción general del proyecto - Responsable (DM-HB)
Este proyecto pretende construir una aplicación para la composición en linea mediante clips de sonidos que podrán ser subidos por el usuario.

Existen dos enfoques/patrones de diseño populares para este tipo de aplicaciones:

* Enfoque DJ
* Enfoque Audacity

El enfoque utilizado para nuestra aplicación será el patrón Audacity y pretendemos integrar la siguiente funcionalidad:

- [ ] Login
- [ ] Registro
- [ ] Recuperación de contraseña (O)
- [ ] Agregar un nuevo clip de sonido
- [ ] Adicionar una nueva pista
- [ ] Adicionar un clip a una pista en un determinado tiempo
- [ ] Modificar la posición temporal del clip en el tiempo
- [ ] Silenciar una pista (O)
- [ ] Compartir la pista en redes sociales (O)
- [ ] Permite descargar las composiciones creadas (O)




*(O) - Característica opcional*

#### Objetivos - Responsable (DM)
Los objetivos a lograr en este proyecto son:

- [ ] Realizar una aplicación web en la cual podamos agregar clips de sonido a una pista, conjunto de hasta 5 clips (cada uno sería un instrumento musical), y poderlas escuchar en conjunto o por separado.
- [ ] Se debe poder agregar, editar o eliminar pistas y su información relacionada.
- [ ] El acceso a la aplicación web será mediante un loggeo de usuarios.
- [ ] Debe tener una alta usabilidad para que en un futuro si se desea se pueda complementar la aplicación y que sea últil para la grabación de pistas de grupos musicales a distancia, es decir, cada integrante del grupo pueda grabar por separado su clip de sonido (su instrumento) y después subirlo a la aplicación para poder escuchar la pista que contiene los demás clips.



#### Benchmarking - Responsable (DM)


<table>
  <thread>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>[Soundation](http://soundation.com)</th>
      <th>Enfoque Audacity</th>
    </tr>
    <tr>
      <th>[Party Cloud](http://www.partycloud.fm)</th>
      <th>Enfoque DJ</th>
    </tr>
    <tr>
      <th>[Mixifi](http://www.mixify.com)</th>
      <th>Enfoque DJ</th>
    </tr>
  </tbody>
</table>



#### Tecnologías a utilizar - Responsable (DM-HB)

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

###### Front end
Con el conjunto de herramientas anteriormente descritas se desarrollara una aplicación permitirá al usuario mezclar archivos de audio sin la necesidad de instalar ningún plugin adicional.
<br>*El alcance del proyecto en cuanto a compatibilidad de navegadores está limitado a funcionar en la última versión de Google Chrome.*

###### Back end
Se piensa implementar mediante Yii una API REST con la funcionalidad requerida.

###### Bases de datos
Para la información correspondiente a la mezcla de pista y como estas se encuentran organizadas en una composición se piensa utilizar MySQL.  


### Diseño

#### Mapas de Navegación - Responsable (HB)
Mapas de navegación

- [ ] Pagina de inicio a dos columnas
  - [ ] Login
      - [ ] Recuperar contraseña 
  - [ ] Registro
- [ ] Aplicación
  - [ ] Agregar clips/archivos
  - [ ] 


#### Mockups - Responsable (HB)

###### Pagina del login
![](media/Index.png)
###### Pagina del la aplicación
![](media/App.png)
###### Diagrama de Despliegue - Responsable (DM)
![](media/diagramaDespliegue.png)

###### Bibliografía
