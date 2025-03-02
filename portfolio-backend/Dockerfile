# Build stage
FROM maven:3.9.9-amazoncorretto-17 AS build
WORKDIR /usr/src/app
COPY . .
RUN mvn clean package

# Debug: List target directory contents
RUN ls -l /usr/src/app/target

# Runtime stage
FROM amazoncorretto:17
WORKDIR /app
COPY --from=build /usr/src/app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]