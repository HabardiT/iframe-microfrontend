# Micro-Frontends (In Progress)
## What are micro-frontends?
Micro-frontends are independent wep applications, developed by independent teams, hosted in their own containers.  
Micro-frontends are essentially derived from the concept of micro-services. 

<<Diagram>>

## Iframe Approach
The solution provided is using the iframe approach to implement micro-frontends based web application.

<<Diagram>>

Each micro-frontend is hosted independently.


## Local Set-up
The solution provided has 5 micro-frontends:
1. Header &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~*port:5001*
2. EmpForm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~*port:5003*
3. EmpList &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~*port:5004*
4. EmpDetails &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~*port:5005*
5. Footer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~*port:5002*

Each micro-frontend will be served on its independent server.  
It also provides a **parent** web application (*port:5000*), that will be used to inject a micro-frontend by using the `<iframe>` element.  
  
This solution is developed using [Visual Studio Code](https://code.visualstudio.com/), and configured to have each application served on its own port using [ritwickdey.LiveServer Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
  - [ritwickdey.LiveServer Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [NodeJS](https://nodejs.org/en/)


### Steps
1. Clone the repository `git clone https://github.com/otaibit/iframe-microfrontend.git`
2. Run `npm install` on root folder `/iframe-microfrontend`
3. Open each micro-frontend on its own vscode window as well as the parent. you can use the script `open-all-in-vscode.bat` to open all.
4. Run `Open With Live Server` on each vscode window to serve the applications on it's own server. 
5. Navigate to `http://localhost:5000/`

## Pros & Cons
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

## Other Approaches
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

## Conclusion
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
