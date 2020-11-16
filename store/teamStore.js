export const state = {}

export const mutations = {}

export const actions = {
    createTeam( {commit}, payload){
        const teams = this.$cookies.get('teams');
        const team = {
            id: teams ? teams.length : 0,
            name: payload.teamName,
            tag: payload.teamTag,
            description: payload.teamDescription,
        }
        
        if(teams){
            teams.push(team);
            this.$cookies.set('teams', teams, {
                path: '/',
                maxAge: 60*60*24*7
            });
        }
        else
            this.$cookies.set('teams', [ team ], {
                path: '/',
                maxAge: 60*60*24*7
            });
    }
}