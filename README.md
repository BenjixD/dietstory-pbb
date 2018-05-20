# DietStory v179.4 README

Credits are given to Nexon, Mushy and SwordieMS teams on the Maplestory v179.4 server base. Distributability and usage of the code is open-source. This server is a monolith maven project built on Java 8 supporting Travis CI. You'll find many broken content ranging from unhandled requests by the client to incomplete gameplay. The goal is to reach a steady server supporting most if not all rich experiences Maplestory has to offer.

## Download

For players, having the client and redirector is sufficient to connect to DietStory v179.4 server.

Client: https://s3.us-east-2.amazonaws.com/maplestory-client/MSSetupv179.rar
Redirector: (Coming Soon)

For developers, you'll need the following WZ Dumper to extract game content from the client to the server. Note this process can take a while. You'll also need an IDE of your choice to work on the maven project along with unlimited strength Java 8 and a MySQL server to connect your running server instance to.

WZDumper: https://s3.us-east-2.amazonaws.com/maplestory-client/WZ+Dumper+1.8.zip

## Installation

For players, read the steps up until it mentions for developers. Developers and server hosts must follow all steps to setup a server & client environment.

### Installing the Client

After downloading the setup, follow the provided steps given by the installer to setup a version of MS v179. Later once everything is in place, your first launch will prompt an update to v179.4. Accept the update and your client will be Dietstory v179.4 ready.

### Installing the Redirector

Extract the contents of the redirector to your client folder. (More on the redirector later).

### For Developers: Installing the WZDumper

Extract the WZDumper to any location on your computer.

### For Developers: Installing Java 8 w/ Unlimited Strength

Download Java Development Kit 8 (tested and working jdk1.8.0u144) installer from the official provider. Also download from an official provider JCE unlimited strength for java 8. After installing the JDK, extract the JCE contents to the following locations:

**<Your Java Location>\jdk1.8.0u144\lib**

**<Your Java Location>\jdk1.8.0u144\jre\lib**

**<Your Java Location>\jdk1.8.0u144\jre\lib\ext**

x**<Your Java Location>\jdk1.8.0u144\jre\lib\security**

Double check your Java version via the CLI:
```
$ java -version
java version "1.8.0_144"
Java(TM) SE Runtime Environment (build 1.8.0_144-b01)
Java HotSpot(TM) 64-Bit Server VM (build 25.144-b01, mixed mode)
```

### For Developers: Setting up your Environment

Clone the project and open it up on your favourite IDE. Intellij comes with built-in plugin for apache maven to build your project. If not, download and install maven from an official provider. To build the server jar file, you may either run it through your IDE or via CLI in the same folder as the project's pom.xml:

```
mvn clean install
```

Setup a MySQL server instance for your dev-staging-prod servers and modify the SQL section in **config.properties**, pointing to your respective database endpoints.

```
#sql details
sql_port=<my port>
sql_user=<my user>
sql_password=<my password>
sql_db=<schema name>
sql_endpoint=<my endpoint>
```

If your database runs locally, then you can specify `sql_port` and `sql_endpoint` to be _3306_ and _127.0.0.1_ (localhost) respectively.

### For Developers: Populating the Database

Run the SQL files located in `<project directory>/resources/db/migration` in order on your database's schema to construct and populate the tables.

Copy the config.properties file into `<project directory>/resource/tools` and run the .bat files located in the folder. Alternatively you can inspect the contents and run the commands on your terminal.

### For Developers: Dumping XML content to Server

Run the WZDumper, and select the option to dump wz files from a folder. Choose your client location and dump it to your `<project directory>/wz`

**Note**: It is likely you'll find the folders `Map0` to `Map9` directly under the `<project directory>/wz/Map.wz` directory. Move the folders to `<project directory>/wz/Map.wz/Map`.

**Note2**: I theorize you may need to update your client to v179.4 before dumping the contents (as you may miss assets) but I've yet to test the consequences of not doing so.

## Running the Game

Build the project as mentioned above. Your application jar will exist under `<project directory>/target/`. Run `launch.bat` to start your local server and ensure that your database is already on and populated. Wait a couple of minutes for the server to finish initialization.

For local servers, you can launch your client directly through the ```gamelauncher.exe```. If your server exists remotely, then you'll need to run the redirector pointing to your remote server. At this stage, you should be able to reach the login screen with no difficulties.

Creation of an account can only be done manually through a database transaction at the moment. Contact the database administrator to setup an account. If you have access to the database, insert the account info into the `accounts` table. To create a password, consider a string of the form `<password> + <salt>` and apply SHA1 encrpytion to it. The encrypted string goes into the password field and the salt string goes into the salt field **(yes that means anyone who has access to the database can still decrypt your password)**.

**Note:** The password2 and salt2 fields can be left null as they pertain to your login PIC.

After logging in, create a character as normal and play the game! Have Fun!