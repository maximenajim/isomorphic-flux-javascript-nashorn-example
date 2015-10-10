package com.github.mnajim.isomorphic.flux.nashorn.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
public class HomeController {

    private React react = new React();

    @RequestMapping(value = { "/**" }, headers = "Accept=text/html")
    public String index(Map<String, Object> model, @RequestParam(value = "ssr", defaultValue = "true", required = false) Boolean ssr,
                        HttpServletRequest request) throws Exception {
        String path = request.getRequestURI();
        String markup = (ssr) ? react.renderApp(path) : "";
        model.put("content", markup);
        model.put("path", path);
        return "index";
    }

}
