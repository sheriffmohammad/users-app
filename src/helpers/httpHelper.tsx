import axios from 'axios'
import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import apiClient from '../api/apiClient';
import { user } from '../classes/user'

const getUsers = async () => {
    return await apiClient.get("/users");
}

const addUser = async (user: user) => {
    return apiClient.post("/users", user)
}

const deleteUser = async (id: number) => {
    return apiClient.delete(`/users/${id}`)
}

export const useGetUsersData = () => {
    return useQuery('users', getUsers)
}

export const useAddUserData = () => {
    return useMutation(addUser)
}

export const useDeleteUserData = () => {
    return useMutation((id: number) => (deleteUser(id)));
}
