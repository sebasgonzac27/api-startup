-- Delete Database
DROP DATABASE University;

-- Create Database
CREATE DATABASE University;

-- Use the database
USE University;

-- Create the Users table
CREATE TABLE Users (
    ID BINARY(16) PRIMARY KEY,
    FullName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    Role ENUM('Student', 'Teacher', 'Administrator') NOT NULL
);

-- Create the Campuses table
CREATE TABLE Campuses (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CampusName VARCHAR(255) UNIQUE NOT NULL
);

-- Create the Classrooms table
CREATE TABLE Classrooms (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ClassroomName VARCHAR(255) UNIQUE,
    CampusID INT NOT NULL,
    FOREIGN KEY (CampusID) REFERENCES Campuses(ID)
);

-- Create the DeviceTypes table
CREATE TABLE DeviceTypes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    TypeName VARCHAR(255) NOT NULL UNIQUE
);

-- Create the Devices table
CREATE TABLE Devices (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DeviceTypeID INT NOT NULL,
    InventoryNumber VARCHAR(50),
    IdentifierNumber VARCHAR(50),
    DeviceStatus ENUM('Available', 'In use', 'Damaged') NOT NULL,
    FOREIGN KEY (DeviceTypeID) REFERENCES DeviceTypes(ID)
);

-- Create the Programs table
CREATE TABLE Programs (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ProgramName VARCHAR(255) UNIQUE NOT NULL
);

-- Create the Requests table
CREATE TABLE Requests (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    RequestDate DATE NOT NULL,
    BorrowDate DATE NOT NULL,
    StartTime TIME NOT NULL,
    EndTime TIME NOT NULL,
    ClassroomID INT NOT NULL,
    ActivityDescription TEXT NOT NULL,
    RequestStatus ENUM('Pending', 'Approved', 'Closed') NOT NULL,
    UserID BINARY NOT NULL,
    ProgramID INT NOT NULL,
    ApprovedBy BINARY,
    ClosedBy BINARY,
    FOREIGN KEY (ClassroomID) REFERENCES Classrooms(ID),
    FOREIGN KEY (UserID) REFERENCES Users(ID),
    FOREIGN KEY (ProgramID) REFERENCES Programs(ID),
    FOREIGN KEY (ApprovedBy) REFERENCES Users(ID),
    FOREIGN KEY (ClosedBy) REFERENCES Users(ID)
);

-- Create the DeviceRequests table
CREATE TABLE DeviceTypeRequests (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    RequestID INT NOT NULL,
    DeviceTypeID INT NOT NULL,
    Device INT,
    FOREIGN KEY (RequestID) REFERENCES Requests(ID),
    FOREIGN KEY (DeviceTypeID) REFERENCES DeviceTypes(ID),
    FOREIGN KEY (Device) REFERENCES Devices(ID)
);

-- Create the DevicesRequests table
CREATE TABLE DevicesRequests (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    RequestID INT NOT NULL,
    DeviceID INT NOT NULL,
    FOREIGN KEY (RequestID) REFERENCES Requests(ID),
    FOREIGN KEY (DeviceID) REFERENCES Devices(ID)
);
