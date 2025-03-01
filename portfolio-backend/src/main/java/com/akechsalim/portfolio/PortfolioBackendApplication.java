package com.akechsalim.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class PortfolioBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioBackendApplication.class, args);
	}
	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();

		// Allow requests from React frontend (localhost:3000 for dev)
		config.addAllowedOrigin("http://localhost:3000");

		// Allow all HTTP methods (GET, POST, etc.)
		config.addAllowedMethod("*");

		// Allow all headers
		config.addAllowedHeader("*");

		// Allow credentials (e.g., cookies, if needed; optional)
		config.setAllowCredentials(true);

		// Apply this configuration to all API endpoints
		source.registerCorsConfiguration("/api/**", config);

		return new CorsFilter(source);
	}

}
