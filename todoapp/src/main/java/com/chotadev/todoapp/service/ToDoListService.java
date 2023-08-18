package com.chotadev.todoapp.service;

import com.chotadev.todoapp.model.ToDoList;
import com.chotadev.todoapp.repository.ToDoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoListService {

    private final ToDoListRepository toDoListRepository;

    @Autowired
    public ToDoListService(ToDoListRepository toDoListRepository) {
        this.toDoListRepository = toDoListRepository;
    }

    public List<ToDoList> getAllLists() {
        return toDoListRepository.findAll();
    }

    public ToDoList createList(ToDoList toDoList) {
        return toDoListRepository.save(toDoList);
    }
}
