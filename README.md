<div align="center">
  <img alt="LogiKit-Banner" src="https://cdn.discordapp.com/attachments/1224721230825783386/1299356381861642260/logikit.png?ex=671ce76e&is=671b95ee&hm=0b116eb10522c016b2a57009402995e50dd6c641bd6b43adbe7b26ac12b525cf&" />
</div>

<p align="center">A customizable logging library for enhanced console output</p>

<p align="center">
  <a href="https://www.npmjs.com/package/logikit">
    <img alt="version" src="https://img.shields.io/npm/v/logikit" />
  </a>

  <a href="https://www.npmjs.com/package/logikit">
    <img alt="license" src="https://img.shields.io/npm/l/logikit" />
  </a>
</p>

<h1>Getting Started</h1>
<h2>Installation</h2>

<h4>Using NPM:</h4>


```
npm install logikit
```


<h4>Using YARN:</h4>


```
yarn add logikit
```

<h2>Usage</h2>

<h4>Logger options</h4>

<details>

  <summary>View all of the available options.</summary>


  <br />


- `INFO`

- `DEBUG`

- `WARN`

- `ERROR`

- `READY`

- `DATABASE`

- `HEARTBEAT`

- `SHARD`

- `CLUSTER`

- `COMMAND`

- `EVENT`

- `NOTICE`

- `CRITICAL`

- `TRACE`

</details>

<h4>Text Colors options</h4>

<details>

  <summary>View all of the available methods.</summary>

  <br />


- `Reset`

- `Black`

- `Red`

- `Green`

- `White`

- `Cyan`

- `Magenta`

- `Blue`

- `Yellow`

</details>

<h4>Background Colors options</h4>

<details>

  <summary>View all of the available methods.</summary>

  <br />


- `BgBlack`

- `BgGreen`

- `BgRed`

- `BgYellow`

- `BgBlue`

- `BgMagenta`

- `BgCyan`

- `BgWhite`

</details>


<h4>Text Style options</h4>

<details>

  <summary>View all of the available methods.</summary>


  <br />


- `Bright`

- `Dim`

- `Underscore`

- `Blink`

- `Reverse`

- `Hidden`

- `Reset`

</details>

<br />

<h4>Import and usage example</h4>    

```js

const { Logger } = require('logikit'); 
const { Colors } = require('logikit/colors'); 
const { Styles } = require('logikit/styles'); 


function runApp() {
  Logger.info("Application started");                
  Logger.debug("Debugging application flow");         
  Logger.warn("Warning! Potential issue detected");      
  
  try {
    // Simulating an error
    throw new Error("Something went wrong!");
  } catch (error) {
    Logger.error("An error occurred", error);            
  }
  
  Logger.ready("Application is ready to accept requests"); 
  Logger.database("Database connection established");      
  Logger.heartbeat("Heartbeat signal sent");               
  Logger.shard("Shard initialized");                       
  Logger.cluster("Cluster started successfully");          
  Logger.command("Command executed");                      
  Logger.event("Event triggered");                         
  Logger.notice("Notice: This is a general notice");      
  Logger.critical("Critical error: System is shutting down"); 
  Logger.trace("Tracing application execution flow");    
  
  Logger.log('INFO', 'This is a custom log with specific styling!', Colors.Green, Styles.Bright);
  Logger.log('DEBUG', 'This log has a blue background!', Colors.White, Styles.BgBlue);
}

runApp();
```

<h4>Output example</h4>

```
[9:21:16] => INFO - Application started
[9:21:16] => DEBUG - Debugging application flow
[9:21:16] => WARN - Warning! Potential issue detected
[9:21:16] => ERROR - An error occurred: Something went wrong!
Stack Trace: ... (the stack trace of the error)
[9:21:16] => READY - Application is ready to accept requests
[9:21:16] => DATABASE - Database connection established
[9:21:16] => HEARTBEAT - Heartbeat signal sent
[9:21:16] => SHARD - Shard initialized
[9:21:16] => CLUSTER - Cluster started successfully
[9:21:16] => COMMAND - Command executed
[9:21:16] => EVENT - Event triggered
[9:21:16] => NOTICE - Notice: This is a general notice
[9:21:16] => CRITICAL - Critical error: System is shutting down
[9:21:16] => TRACE - Tracing application execution flow
[9:21:16] => INFO - This is a custom log with specific styling!
[9:21:16] => DEBUG - This log has a blue background!
```
<h2>Do you have any issues?</h2>

<p>

  > If you have any issues don't hesitate to report it via  <a href="https://github.com/lazyfenix/logikit/issues">GitHub Issues</a>.

</p>

<p>

> This package was made by @lazyfenix.</p>