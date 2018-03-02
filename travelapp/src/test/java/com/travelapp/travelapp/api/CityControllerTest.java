package com.travelapp.travelapp.api;

import com.travelapp.travelapp.domain.City;
import com.travelapp.travelapp.persistence.CityJpaRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(CityController.class)
public class CityControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CityJpaRepository cityJpaRepository;

//    @Before
//    public void setUp() throws Exception {
//       // mockMvc = MockMvcBuilders.standaloneSetup(cityController).build();
//    }

    @Test
    public void testCityController() throws Exception{

        City guimaraes = new City("guimaraes");

//        List<City> list = new ArrayList<>();
//        list.add(guimaraes);

//        Mockito.when(cityJpaRepository.findAll()).thenReturn(list);

        mockMvc.perform(MockMvcRequestBuilders.get("/city"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(print());


//        Assert.assertEquals("GUIMARAES", );
    }
}