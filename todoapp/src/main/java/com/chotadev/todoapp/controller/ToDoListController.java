package com.chotadev.todoapp.controller;

import com.chotadev.todoapp.model.ToDoList;
import com.chotadev.todoapp.service.ToDoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ToDoListController {

    private final ToDoListService toDoListService;

    @Autowired
    public ToDoListController(ToDoListService toDoListService) {
        this.toDoListService = toDoListService;
    }

    @GetMapping("/todo-lists")
    public ResponseEntity<List<ToDoList>> getAllLists() {
        return new ResponseEntity<>(toDoListService.getAllLists(), HttpStatus.OK);
    }

    @GetMapping("/create-test-data")
    public ResponseEntity<ToDoList> createTestData() {
        ToDoList newList = new ToDoList();
        newList.setTitle("ToDo App project");
        newList.setDescription("This list helps to track the ToDo items for the ToDo App project");

        ToDoList response = toDoListService.createList(newList);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


}
