package com.travelapp.travelapp.api;

import com.travelapp.travelapp.application.TripService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class MainErrorController implements ErrorController {

    private static Logger logger = LoggerFactory.getLogger(TripService.class);
    @RequestMapping(value = "/error")
    public String error() {

        logger.error("Resource Not Found");
        return "Error 404: Resource Not Found";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
