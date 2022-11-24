import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    Text
} from "react-native";
const App = () => {
        useEffect(() => {
            getListStudent();
        }, [])

        const getListStudent = () => {
                fetch("", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(res => {
                        return res.json()
                    }).then(res => {
                        var data = res.list_student
                    }).catch(err =>{
                        console.log(err)
                    })
        }
    }