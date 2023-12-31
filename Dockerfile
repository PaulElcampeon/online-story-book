# Use an official Maven image as the base image for the build stage
FROM maven:3.8.4-openjdk-17-slim AS build

# Copy the pom.xml file to the container
COPY . .

# Download the dependencies specified in the pom.xml file
RUN mvn dependency:go-offline -B

# Build the application using Maven
RUN mvn package -DskipTests


# Use Eclipse Temurin JDK 19 and Alpine Linux as the base image for the final image
FROM eclipse-temurin:19-alpine

# Copy the built JAR file from the build stage to the final image
COPY --from=build target/*.jar app.jar

# Expose the port on which the Spring Boot application will listen
EXPOSE 8080

# Set the command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "app.jar"]
