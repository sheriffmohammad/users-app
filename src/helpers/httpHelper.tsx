import axios from 'axios'
import React from 'react'
import { useQuery, useMutation } from 'react-query';
import apiClient from '../api/apiClient';
import { user } from '../classes/user'

const getUsers = async () => {
    return await apiClient.get("/users");
}

const addUser = async (user: user) => {
    return apiClient.post("/users", user)
}

export const useGetUsersData = () => {
    return useQuery('users', getUsers)
}

export const useAddUserData = () => {
    return useMutation(addUser)
}
