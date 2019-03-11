# Clockwork Exercise documentation
This is a small web application and API to display / calculate time zones. The API is build in .NET Core 2.0 with EF and the web application is 
written in Angular7. 

## Running the application

In order to run the angular frontend of this demonstration, you must first ensure you have installed:
1. npm 8.x or 10.x [click here for installers](https://www.npmjs.com/get-npm)
2. angularjs open your terminal and type **npm install -g angular/cli**

And the .NET API retuires .NET Core 2.0 [runtime library and SDK](https://dotnet.microsoft.com/download/dotnet-core/2.0)

Once everything has been installed, navigate to the Clockwork.API directory and ensure that you have the latest migrations in the provided clockwork.db file. 
You can do this by entering **dotnet ef database update**. Once that is complete, run the API with **dotnet run**, and take note of the 
endpoint port. If this number differs from **47737**, you will need to update the environments.ts file located at **ngClockworkWeb\environments\environments.ts** to
the correct port. Navigate to the ngClockworkWeb and run
**npm install** this will install the prerequisite information to run the application. Then, run 
**ng serve --open**. this will run the web application locally, as well as open a browser window to display the data.

## API Documentation

The Clockwork.API has several endpoints to be mindful of.

### api/currenttime:
 This GET request will return the current DateTime of the location where the server is being run at.

### api/currenttime/all:
 This GET request will return all database entries in the currenttime table of clockwork.db.

### api/timezoneids:
 This GET request will return all timezones recognized by .NET's DateTime

### api/worldtime/{id}:
This GET request will return the datetime of the specified ID required. the {id} parameter is an integer value, and is relational
to the index of timezones returned from api/timezoneids endpoint.

### api/worldtime/all:
This GET request will return all database entires located in the WorldTimeQuery table inside clockwork.db

### api/healthcheck:
This GET request will return a status code 418 - I'm a teapot. Used to ensure the service is actively running.
