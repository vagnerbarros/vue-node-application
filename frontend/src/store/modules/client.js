import axios from '@/util/axios';

export default{
    
    namespaced: true,

    state: {

        clients: [],
        currentClient: {
            firstName: '',
            lastName: '',
            adress: '',
            city: '',
            state: ''
        },
        editMode: false,
        loading: false
    },

    getters: {

        isEditing(state){
            return state.editMode;
        }
    },

    actions: {

        load({commit}){

            commit('setLoading', true);
            axios.get('/clients')
            .then((response) => {
                commit('setClients', response.data);
            })
            .catch((err) => {
                commit('setClients', []);
                commit('setLoading', false);
                commit('setMensagemErro', erro.response.data.msg, {root: true});
            });  
        },
        save({commit, state}, clientData){
            
            commit('setLoading', true);
            let client = Object.assign({}, state.currentClient);
            if(state.editMode){
                axios.put('/clients', client)
                .then((response) => {
                    let result = response.data;
                    if(result.status){
                        commit('setErrorText', result.msg, {root: true});
                        commit('setLoading', false);
                    }
                    else{
                        commit('update', result);
                        commit('startState', clientData.router);
                        commit('setSucessText', 'Client Updated', {root: true});
                    }
                })
                .catch((erro) => {
                    commit('setMensagemErro', erro.response.data.msg, {root: true});
                });
            }
            else{
                delete(client._id);
                axios.post('/clients', client)
                .then((response) => {
                    let retorno = response.data;
                    if(retorno.status){
                        commit('setErrorText', retorno.msg, {root: true});
                        commit('setLoading', false);
                    }
                    else{
                        commit('add', retorno);
                        commit('startState', clientData.router);
                        commit('setSucessText', 'Client Saved', {root: true});
                    }
                })
                .catch((erro) => {
                    commit('setErrorText', erro.response.data.msg, {root: true});
                });
            }
        },
        edit({commit}, data){
            commit('setLoading', true);
            data.router.push('/clients/edit');
            commit('edit', data.client);
        },
        newClient({commit}, data){
            commit('setLoading', true);
            data.router.push('/clients/new');
            commit('newClient');
        },
        remove({commit}, removeClient){
            commit('setLoading', true);
            axios.delete('/clients', {
                data: { _id: removeClient._id }
            })
            .then((response) => {
                commit('remove', response.data);
                commit('setSucessText', 'Client Removed', {root: true});
            })
            .catch((erro) => {
                commit('setLoading', false);
                commit('setErrorText', erro.response.data.msg, {root: true});
            });
        },
        cancel({commit}, data){
            commit('startState', data.router);
        }
    },

    mutations: {

        setClients(state, clients){
            state.clients = clients;
            state.loading = false;
        },
        setLoading(state, valor){
            state.carregando = valor;
        },
        remove(state, client){
            state.clients = state.clients.filter(cli => cli._id !== client._id);
            state.loading = false;
        },
        newClient(state){
            state.editMode = false;
            state.currentClient = {
                firstName: '',
                lastName: '',
                adress: '',
                city: '',
                state: ''
            }
            state.loading = false;
        },
        edit(state, editClient){
            state.editMode = true;
            state.currentClient = editClient;
            state.loading = false;
        },
        add(state, client){
            state.clients.push(client);
            state.loading = false;
        },
        update(state, current){
            state.clients.forEach(client => {
                if(client._id === current._id){
                    client = current;
                }
            });
            state.loading = false;
        },
        startState(state, router){
            state.currentClient = {
                firstName: '',
                lastName: '',
                adress: '',
                city: '',
                state: ''
            }
            router.push('/clients');
            state.loading = false;
        }
    }
}