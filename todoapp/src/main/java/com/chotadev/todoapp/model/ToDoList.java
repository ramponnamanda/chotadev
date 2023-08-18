package com.chotadev.todoapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "todo_list")
public class ToDoList {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

}
