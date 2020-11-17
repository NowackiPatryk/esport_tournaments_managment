export const state = () => ({
    currentViewedTeam: null,
})  

export const mutations = {
    setCurrentViewedTeam( state, payload ){
        const { team } = payload;
        state.currentViewedTeam = team;
    },
}

export const actions = {
    createTeam( {commit}, payload ){
        const teams = this.$cookies.get('teams');
        const { teamName, teamTag, teamDescription, leaderId } = payload;
        const team = {
            id: teams ? teams.length : 0,
            name: teamName,
            tag: teamTag,
            description: teamDescription,
            members: [ leaderId ],
            leader: leaderId,
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
    },

    getTeamById( { commit }, payload ){
        const { id } = payload;
        const teams = this.$cookies.get('teams');

        for( team of teams )
            if( team.id == id )
            commit('setCurrentViewedTeam', { team: team })

    }
}