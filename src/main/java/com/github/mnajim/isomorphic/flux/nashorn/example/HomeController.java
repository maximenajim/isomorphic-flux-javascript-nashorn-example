package com.github.mnajim.isomorphic.flux.nashorn.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class HomeController {

    private React react = new React();

    @RequestMapping("/")
    public String index(Map<String, Object> model)
            throws Exception {
        return run(model, "");
    }

    @RequestMapping("/hellonashorn")
    public String helloWorld(Map<String, Object> model)
            throws Exception {
        return run(model, "hellonashorn");
    }

    public String run(Map<String, Object> model, String path)
            throws Exception {
        path = "/" +path;
        String productsMarkup = react.renderApp(path);
        model.put("content", productsMarkup);
        model.put("path", path);
        return "index";
    }

}