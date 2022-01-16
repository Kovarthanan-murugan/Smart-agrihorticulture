# Smart-agrihorticulture
[![Watch the video](.png)](https://youtu.be/vt5fpE0bzSY)

Internet of Things (IoT) is the interconnection or network of physical devices that is interrelated computing devices, digital and mechanical machines, people or animals, objects that can sense, accumulate and transfer data over web without any human involvement. Everything is provided with unique identifier. It is a progressed examination and mechanized frameworks which uses detecting, organizing, enormous information and man-made consciousness innovation to convey total framework for an administration. Basically, IoT is about extending the power of internet beyond smart phones and computers.

IoT has changed today’s world. Smart cities, smart car, smart homes everything around us can be turned into a smart device with the help of IoT. It also has applications in agriculture, business sectors, healthcare, transport and logistics.

**There are four main components of IoT-**

•	Low power embedded system- High performance and less battery consumption are the inverse factors that play an important role in design of electronic system.
•	Cloud computing- Data collected from devices is stored on reliable storage servers so here cloud computing comes into action.
•	Availability of Big Data- As IoT is highly dependent on sensors that are real time. So, the usage of electronic devices is spread throughout every field that is going to trigger a massive flux of data.
•	Network connection- For communication, internet connectivity is necessary where each physical object is assigned by an IP address. A network connection is built between the devices with the help of these address.
Technology today has not reached its 100% capability. So, the advantages and disadvantages of this technology are given below-

**Advantages of IoT**

•	Utilization of Resources Efficiently
•	Minimization of Human Efforts
•	Time-saving
•	Increase Data Collection

**Disadvantages of IoT**

•	Security
•	Privacy
•	Complexity
                                     


**IoT in Agriculture**

Internet of Things has capacity to transform the lives of people in the world in an efficient manner. The ever-growing population would touch more than 3 billion in few years. So, to feed such an immense population, agriculture industry need to embrace IoT. The demand for more food has to address challenges that include excessive climate conditions, weather change and different environmental affects that results from farming practices.


 The destiny of Indian agriculture must be worked with understanding and excessive cease technologies that can expand production and furthermore regains the attention of farmers   in this industry. So, these smart farming techniques would assist farmers to lessen scrap and enhance capacity. It is basically a high tech and capital-intensive system for growing crops in a sustainable manner for masses. This technology can help farmers to monitor field conditions from anywhere with the help of sensors and can also irrigate fields with an automated system. It is the application of Information and Communication Technology into the field of agriculture.
 
**Structure of IoT in Agriculture**
Basically this system structure consists of 3 layers that are sensor layer, transport layer, application layer and the functions of these layers are below:
                    1) Sensor layer- One of the challenge of the sensor layer is to obtain automated and real time transformations of the figures of actual world agricultural manufacturing into digital transformation or information which could be processed in virtual world through different or various means. The data that they collect are-
Sensor information- Humidity, temperature, gas concentrations, pressure etc.
Products information- name, model, price and features.
Working condition - operating parameters of different equipment’s, apparatus etc.
The major challenge of Information layer is to mark diverse kinds of information or data and gathering the information and marked information in the actual world by means of techniques of sensing, after which remodels them for processing into digital information. This sensor layer includes some strategies- RFID tags, cameras, two-dimension code labels, sensor networks.
  2)Transport layer- This layer’s task is to acquire and summarize the data of agriculture acquired from the above layer for processing. It is believed as the nerve center of IoT. This layer includes the combination of telecommunication management center and also internet network, information center, smart processing centers.
3)Application layer- The function of this layer is to analyses and process the information collected for the cultivation of digital awareness of actual world. It is considered as a fusion of IoT and agricultural market intelligence.

**Benefits of IoT in Agriculture:**
IoT empowers simple gathering and the executives of huge amounts of information which is gathered from sensors used and with the help of joining of distributed evaluating administrations such as cloud storage, farming field maps and more information can be retrieved from any place and everywhere which enables live monitoring and connectivity which is end to end.
IoT is viewed as an important segment for smart farming because with precise use of sensors and also the smart gadgets, farmers could expand the output by 72% up to year 2050 as delineated by specialists.
By the use of IoT creations expenses could be diminished to an astounding dimension that would thus expand productivity and survivability.
By the use of IoT efficiency level would be further expanded as far as utilization of water, soil, fertilizers, pesticides etc.

**Applications of IoT in Agriculture**

•	Precision farming
•	Agricultural drones
•	Livestock monitoring
•	Smart greenhouses
                                    
 
**OBJECTIVES**

Most agricultural food production in the modern day is performed in large scale, monocrop farms on huge plots of land. While it has been streamlined to produce huge amounts of food at a relatively cheap price, monocrop farming puts a significant strain on the soil and the surrounding environment by using up specific nutrients for different crops, as well as using tremendous amounts of water. The idea with this is to shift dependence on large scale agriculture by giving people the ability to cultivate their own plants with little to no actual physical labor on their part. It would be able to remember the location of each plant and provide specialized care to water each plant as needed based on an online database. This means that, with this, a person with little to no actual gardening experience could have the home-garden of their dreams with no more effort than a few taps on the screen of a tablet computer.

•	To reduce the wastage of water and  better utilization of resources to increase the yield by making the growing environment suitable for the particular crop through automating the system to adjust its climatic factors.
•	Notifying the user about pest and disease in the plants as early as possible with the help of image recognition.
•	Providing a user-friendly web application for user to control and monitor the system




The basic building blocks of an IoT System are Sensors, Processors and applications. So the block diagram below is the proposed model of our project which shows the interconnection of these blocks. The sensors are interfaced with Microcontroller, data from the sensor is displayed on the web application of the user. Web application provides an access to the continuous data from sensors and accordingly helps farmer to take action to fulfil the requirements of the soil.


 
**Work Flow**

![image](https://user-images.githubusercontent.com/90558927/149665703-c7e7cbc5-8bf1-4bd2-a273-a13cc3697c86.png)

When the data of different sensors that are humidity, temperature, soil moisture and location is acquired it is sent to the mobile app of the user and if the water content in the soil is less than the cut off value then an alert message is received on the app of the user and motor gets switched on automatically using relay.

The   high definition camera attached in the system is used to take images and video for image recognition using tensorflow api’s for object detection.

Once the pest or disease in it is identified it give alert to the user who have the access to the webapp which was provided to them when they signed up for the program .Then user can give commands to the system or the system itself will take necessary action based on the program  which it was programmed to do


**Web Application**
  Web application is used to control and monitor all the peripherals attached in the remote location Using internet.

**Live data page:**

A web page (or webpage) is a hypertext document provided by a website and displayed to a user in a web browser. A website typically consists of many web pages linked together in a coherent fashion. The name "web page" is a metaphor of paper pages bound together into a book.

The user who has the access to the webapp can possible able to see all the live data from the peripherals attached in the remote location.

![image](https://user-images.githubusercontent.com/90558927/149665635-4b1cc420-7417-43cf-9d7a-dd26a810c33e.png)

The live data include Humidity, Soil Temperature,  pH, Turbidity in water and so on, all the data’s will be send live to a server and then to the webapp,



**Database Page:**

A database is an organized collection of structured information, or data, typically stored electronically in a computer system.

The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use structured query language (SQL) for writing and querying data.

The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use structured query language (SQL) for writing and querying data.

![image](https://user-images.githubusercontent.com/90558927/149665630-bf2d5749-ed6d-445e-b32a-ea47f47fdba3.png)


The data which is fetched from the remote location will be stored in a database for the analytics purpose and also it will be stored in table for easy access



**Pest Identification Page:**


Images of the leaves affected by pests are acquired by using a digital camera. The leaves with pest images are processed for getting a gray colored image and then using feature extraction, image classification techniques to detect pests on leaves. 

The techniques of image analysis are extensively applied to agricultural science, and it provides maximum protection to crops, which can ultimately lead to better crop management and production. Monitoring of pests infestation relies on manpower, however automatic monitoring has been advancing in order to minimize human efforts and errors.

The images are acquired by using a digital camera .And it will be processed by the algorithms to identify the pest in it .Once pest in the plants are identifies then it will be send to the web app through the server

![image](https://user-images.githubusercontent.com/90558927/149665622-23668295-6669-48be-9491-bbe81037a8b4.png)


All the Image taken in the remote location will be send to the fire base database where which these images of identified pest will be stored


When the user request for the pest images the webapp will retrieve the images from the Server and display them in the web page

 
                  
**Technologies used: **
 
The HyperText Markup Language, or HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. 

HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.
 HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. 



**CSS**

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. 
CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. 
CSS is designed to enable the separation of presentation and content, including layout, colours and fonts. 
This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .

CSS file which reduces complexity and repetition in the structural content as well as enabling the .CSS file to be cached to improve the page load speed between the pages that share the file and its formatting.
  
**Java Script**

JavaScript  often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. 
It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. 
The vast majority of websites use it for client-side page behaviour, and all major web browsers have a dedicated JavaScript engine to execute it.
As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. 
It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
Javascript can be used to:
•	Loading new web page content without reloading the page, via Ajax or a WebSocket. For example, users of social media can send and receive messages without leaving the current page.
•	Web page animations, such as fading objects in and out, resizing, and moving them.
•	Playing browser games.
•	Controlling the playback of streaming media.
•	Generating pop-ups.
•	Validating input values of a web form before the data is sent to a web server.
•	Logging data about the user's behavior then sending it to a server. The website owner can use this data for analytics, ad tracking, and personalization.
•	Redirecting a user to another page. 
  
**Realtime Database:**

Store and sync data with our NoSQL cloud database. Data is synced across all clients in realtime and remains available when your app goes offline. Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.

![image](https://user-images.githubusercontent.com/90558927/149665591-36fd20f7-699f-4b7c-8612-d9ad046c568e.png)
  
 **Arduino** Ide (Integrated Development Environment)
  
Arduino IDE is an open-source programming which is basically used to write & compile code using a module that is Arduino. This is an official programming software which makes compiling of code simple so a typical man can understand the learning procedure. 

This software is readily available for all operating systems like MAC, windows, Linux. Arduino Mega, Arduino Uno, Arduino Leonardo and more are range of Arduino modules that are available.

It basically has a text editor which is used for writing code, a text console, a message area, a toolbar with buttons for some of the common functions. Sketches are called as the programs that are written using this software. Coding on this software mostly uses functions of c/c++.


  
![image](https://user-images.githubusercontent.com/90558927/149665660-a86d78c8-fc38-4206-a4c5-bbd89790f5fe.png)



Arduino IDE is a derivative of the Processing IDE, however as of version 2.0, the Processing IDE will be replaced with the Visual Studio Code-based Eclipse Theia IDE framework.

                        

With the rising popularity of Arduino as a software platform, other vendors started to implement custom open source compilers and tools (cores) that can build and upload sketches to other microcontrollers that are not supported by Arduino's official line of microcontrollers
.    
![image](https://user-images.githubusercontent.com/90558927/149665655-94531583-191c-4589-9cb5-4ef965602219.png)




The above figure shows the picture of Arduino sketch. The tool bar consists of many icons. The first icon from the left is to verify, the second one is to upload, the third one is for opening new project, the fourth one is to open a project and the fifth one is to save the project. The icon on the extreme right is for opening serial monitor. The white area in the middle is coding area.



