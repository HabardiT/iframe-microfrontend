# Micro-Frontends (In Progress)
## What are micro-frontends?
Micro-frontends are independent wep applications, developed by independent teams, hosted in their own containers.  
Micro-frontends are essentially derived from the concept of micro-services. 

![micro-frontend](https://i.imgur.com/fw24Edr.png)

## Demo [Iframe Approach]
*This demo does not include Micro-Services*.  
The solution provided has 6 micro-frontends:

![iframes](https://i.imgur.com/dhDpwaZ.png)

| Component | URL |
| ------ | ------ |
| Parent | http://localhost:5000/ |
| Header | http://localhost:5001/ |
| Footer | http://localhost:5002/ |
| EmpForm | http://localhost:5003/ |
| EmpList | http://localhost:5004/ |
| EmpDetails | http://localhost:5005/ |

- Each micro-frontend will be served on its independent server.  
- Each micro-frontend will be injected into the **Parent**.
- Communications between micro-frontends will be done through the **Parent**, using `window.postMessage()`
  - Upon submission in **EmpForm**, an event will be fired through **Parent** targetting **EmpList** to inject the new employee to employee list(*or to refresh employee list if micro-services are implemented*).
  - Upon selecting an employee in **EmpList** an event will be fired through **Parent** targetting **EmpDetails** to display selected employee details.
  - Each event fired will specify the target micro-frontend, for the parent to forward it.
  
This solution is developed using [Visual Studio Code](https://code.visualstudio.com/), and configured to have each application served on its own port using [ritwickdey.LiveServer Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
  - [ritwickdey.LiveServer Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [NodeJS](https://nodejs.org/en/)


### Steps
1. Clone the repository `git clone https://github.com/otaibit/iframe-microfrontend.git`
2. Run `npm install` on root folder `/iframe-microfrontend`
3. Open each micro-frontend on its own vscode window. you can use the script `open-all-in-vscode.bat` to open all.
4. Run `Open With Live Server` on each vscode window to serve the applications on it's own server. 
5. Navigate to `http://localhost:5000/`

## Pros & Cons
The following are pros and cons of micro-frontends using iframe approach  
### Pros
- Separation of code promotes faster development, each feature will be built from scratch with almost no dependency on any other application.
- Separation of deployments! each module will be deployed and served independently 
- Better maintenance! if an issue arrise on a module, it will not affect the rest of the web application.
- Better scalability! new features could be implemented from scratch and injected into the app.

### Cons
- Lower Performance! modules being independent of one another, will result in duplicate libraries downloaded on client's end.  
![Performance](https://i.imgur.com/UWwKUZW.png)
  
- Alignment Issues(Interactivity & Responsiveness) ! a module's UI design might look seamless when navigated to on its own server. but when injected into the main application, a lot of workarounds will need to be introduced to have it look half-decent on the injected page. 

- Popups/Modals/Dialuge/Dropdowns will need to be implemented on the injected page rather than the module itself, due to **iframe** limitations, which breaks the separtion of code and independency in these situations.
![Dropdown](https://i.imgur.com/4Tzkvld.png)
  
## Conclusion
Micro-Frontends has great potential in solving enterprise web applications issues when it comes to scalability and maintenance. 
Based on this demo, and my personal analysis, I believe that iframe is not a suitable approach to micro-frontend *currently*.  
### Other Approaches
- [Single SPA](https://single-spa.js.org/)
- [Frint](https://frint.js.org/)
- [Web Components](https://www.webcomponents.org/introduction) *not a framework, but a browser feature, it might be the future to micro-frontends*
- [Tailor](https://github.com/zalando/tailor)
