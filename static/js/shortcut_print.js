short_p = document.querySelector('#shortcut_print')
short_p.addEventListener('click',()=>
{
    mn = Number(document.querySelector('#span_mn').textContent)
    attempt_id = Number(document.querySelector('#span_attempt_id').textContent)
    series_index = Number(document.querySelector('#span_series_index').textContent)
    display_shortcut_teams(mn,attempt_id,series_index)
})
let display_shortcut_teams = function(mn,attempt_id,series_index)
{
    console.log(mn,attempt_id,series_index)
    let data = JSON.parse(localStorage.getItem(`WA_${series_index}_${mn}`))
    data.attempts.forEach((attempt)=>
    {
        if(attempt.team_list_id==attempt_id)
        {
            display_shortcut_teams_helper(attempt,series_index);
        }
    })

}
let display_shortcut_teams_helper = function(attempt,series_index)
{
    teams_data_obj = sd.req_data[series_index]
    team1 = teams_data_obj.teams[attempt.team_one_index].players
    team2 = teams_data_obj.teams[attempt.team_two_index].players
    teams_shortcut = document.querySelector('#teams_shortcut')
    teams_shortcut.style.display="block"
    tv = document.querySelector('#teams_vp')
    tv.style.display="none"
    tsp = document.querySelector('#team_shortcut_placer')
    attempt.team_list.forEach((team,index)=>
    {
        selected_players =[]
        team.selected_team_one.forEach((sto_index)=>
        {
            selected_players.push(team1[sto_index])
        })
        team.selected_team_two.forEach((stt_index)=>
        {
            selected_players.push(team2[stt_index])
        })
        tsp.appendChild(get_shortcut_team(selected_players,index+1,team.captain,team.vice_captain))
    })
}
let get_shortcut_team = function(selected_players,team_number,captain,vice_captain)
{
    div = document.createElement('div')
    div.classList.add('border','shortcut-team','m-2')
    li=document.createElement('li')
    li.textContent=`Team no: ${team_number}`
    div.appendChild(li)
    wk=[]
    bat=[]
    al=[]
    bowl=[]
    selected_players.forEach((p)=>
    {
        if(p.player_role==1)
            wk.push(p)
        else if(p.player_role==2)
            bat.push(p)
        else if(p.player_role==3)
            al.push(p)
        else 
            bowl.push(p)
    })
    v_1 = document.createElement('span')
    v_1.textContent="wicket keeper"
    v_1.style.color="green"
    div.appendChild(v_1)
    wk.forEach((player)=>
    {
        temp = document.createElement('li')
        if(player.player_id==captain)
        temp.textContent=`${player.player_name}(c)`
        else if(player.player_id==vice_captain)
        temp.textContent=`${player.player_name}(vc)`
        else
        temp.textContent=`${player.player_name}`
        div.appendChild(temp)
    })
    v_2 = document.createElement('span')
    v_2.textContent="batsman"
    v_2.style.color="green"

    div.appendChild(v_2)
    bat.forEach((player)=>
    {
        temp = document.createElement('li')
        if(player.player_id==captain)
        temp.textContent=`${player.player_name}(c)`
        else if(player.player_id==vice_captain)
        temp.textContent=`${player.player_name}(vc)`
        else
        temp.textContent=`${player.player_name}`
        div.appendChild(temp)
    })
    v_3 = document.createElement('span')
    v_3.textContent="alrounder"
    v_3.style.color="green"
    div.appendChild(v_3)
    al.forEach((player)=>
    {
        temp = document.createElement('li')
        if(player.player_id==captain)
        temp.textContent=`${player.player_name}(c)`
        else if(player.player_id==vice_captain)
        temp.textContent=`${player.player_name}(vc)`
        else
        temp.textContent=`${player.player_name}`
        div.appendChild(temp)
    })
    v_4 = document.createElement('span')
    v_4.textContent="bowler"
    v_4.style.color="green"
    div.appendChild(v_4)
    bowl.forEach((player)=>
    {
        temp = document.createElement('li')
        if(player.player_id==captain)
        temp.textContent=`${player.player_name}(c)`
        else if(player.player_id==vice_captain)
        temp.textContent=`${player.player_name}(vc)`
        else
        temp.textContent=`${player.player_name}`
        div.appendChild(temp)
    })
    return div
}