package com.travelapp.travelapp.exceptions;

import com.travelapp.travelapp.application.TripService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolationException;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler{

    private static Logger logger = LoggerFactory.getLogger(TripService.class);

    @ExceptionHandler(EmptyResultDataAccessException.class)
    @ResponseBody
    public String handleEmptyResultDataAccessException(Exception ex, HttpServletResponse response) {
        logger.error("Empty Result Data Access Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return "Resource does not exist" ;
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseBody
    public String handleDataIntegrityViolationException(Exception ex, HttpServletResponse response) {
        logger.error("Data Integrity Violation Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return "A specified parameter does not exist";
    }

    @ExceptionHandler(TransactionSystemException.class)
    @ResponseBody
    public String handleTransactionSystemException(Exception ex, HttpServletResponse response) {
        logger.error("Transaction System Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return "All parameters must be specified" ;
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseBody
    public String handleConstraintViolationException(Exception ex, HttpServletResponse response) {
        logger.error("Constraint Violation Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return "Bad parameter specified" ;
    }

    @ExceptionHandler(InvalidDataAccessApiUsageException.class)
    @ResponseBody
    public String handleInvalidDataAccessApiUsageException(Exception ex, HttpServletResponse response) {
        logger.error("Invalid Data Access Api Usage Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return "Specified id must not be null" ;
    }

    @ExceptionHandler(TripDoesNotExistException.class)
    @ResponseBody
    public String handleTripDoesNotExistException(Exception ex, HttpServletResponse response) {
        logger.error("Trip Does Not Exist Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return ex.getMessage() ;
    }

    @ExceptionHandler(TripAlreadyExistsException.class)
    @ResponseBody
    public String handleTripAlreadyExistsException(Exception ex, HttpServletResponse response) {
        logger.error("Trip Already Exists Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return ex.getMessage() ;
    }

    @ExceptionHandler(SameCityOriginAndDestinationException.class)
    @ResponseBody
    public String handleSameCityOriginAndDestinationException(Exception ex, HttpServletResponse response) {
        logger.error("Same City Origin And Destination Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return ex.getMessage() ;
    }

    @ExceptionHandler(TravellerAlreadyHasTripAtDateException.class)
    @ResponseBody
    public String handleTravellerAlreadyHasTripAtDateException(Exception ex, HttpServletResponse response) {
        logger.error("Traveller Already Has Trip At Date Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return ex.getMessage() ;
    }

    @ExceptionHandler(PastTimeException.class)
    @ResponseBody
    public String handlePastTimeException(Exception ex, HttpServletResponse response) {
        logger.error("Past Time Exception");
        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return ex.getMessage() ;
    }

    @ExceptionHandler(NullPointerException.class)
    @ResponseBody
    public String handleNullPointerException(Exception ex, HttpServletResponse response) {
        logger.error("Null Pointer Exception");
//        response.setStatus(HttpStatus.BAD_REQUEST.value());
        return "Null Pointer Exception" ;
    }
}
