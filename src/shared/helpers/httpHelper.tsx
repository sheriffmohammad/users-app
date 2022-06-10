import { useQuery, useMutation } from 'react-query';
import apiClient from '../../api/apiClient';
import { user } from '../classes/user'

//#region Axios

const getUsers = async () => {
    return await apiClient.get("/users");
}

const addUser = async (user: user) => {
    return apiClient.post("/users", user)
}

const deleteUser = async (id: number) => {
    return apiClient.delete(`/users/${id}`)
}

const editUser = async (user: user) => {
    return apiClient.put(`/users/${user.id}`, user)
}

//#endregion

//#region react-query

export const useGetUsersData = () => {
    return useQuery('users', getUsers)
}

export const useAddUserData = () => {
    return useMutation(addUser)
}

export const useDeleteUserData = () => {
    return useMutation((id: number) => (deleteUser(id)));
}

export const useEditUserData = () => {
    return useMutation((user: user) => (editUser(user)));
}

//#endregion
