sh = screen.height
let update_player_count = function()
{
  //  console.log("we are here")
  cp = document.getElementById('choose_player')
  cp.classList.remove('without-size')
  cp.classList.add('with-size')
  vp_1 = document.querySelectorAll('.without-size')
    vp_1.forEach((ele)=>
    {
        ele.style.height=`${(sh*0.72)}px`
    })
    vp_2 = document.querySelectorAll('.with-size')
    vp_2.forEach((e)=>
    {
        e.style.height=`${(sh*0.45)}px`
    })
   team_one = document.querySelectorAll('.team_one_data')
   team_two = document.querySelectorAll('.team_two_data')
   let team_one_cnt=0 
   let team_two_cnt=0
   let pc = document.querySelector('#player_count')
   team_one.forEach((obj)=>
   {
       if(Array.from(obj.classList).includes('border-green'))
        team_one_cnt++
   })
   team_two.forEach((obj)=>
   {
       if(Array.from(obj.classList).includes('border-green'))
        team_two_cnt++
   })
   //console.log(team_one_cnt,team_two_cnt)
   if((team_one_cnt+team_two_cnt)>0)
   {
        pc.style.display="block"
        update_team_details(team_one,team_two)
   }
   else
   {
    cp = document.getElementById('choose_player')
    cp.classList.remove('with-size')
    cp.classList.add('without-size')
     vp_1 = document.querySelectorAll('.without-size')
    vp_1.forEach((ele)=>
    {
        ele.style.height=`${(sh*0.72)}px`
    })
    vp_2 = document.querySelectorAll('.with-size')
    vp_2.forEach((e)=>
    {
        e.style.height=`${(sh*0.45)}px`
    })
       pc.style.display="none"
   }
}

let update_team_details = function(team_one,team_two)
{
    let wk_one_cnt=0
    let bat_one_cnt=0
    let al_one_cnt=0
    let bowl_one_cnt=0
    let total_one_cnt=0
    let wk_two_cnt=0
    let bat_two_cnt=0
    let al_two_cnt=0
    let bowl_two_cnt=0
    let total_two_cnt=0

    team_one.forEach((obj)=>
    {
        if(Array.from(obj.classList).includes('border-green'))
        {
            role = obj.querySelector('#player_role').textContent
            if(role=='WK') wk_one_cnt++
            else if(role=='BAT') bat_one_cnt++
            else if(role=='AL') al_one_cnt++
            else bowl_one_cnt++
            total_one_cnt++
        }
    })
    team_two.forEach((obj)=>
    {
        if(Array.from(obj.classList).includes('border-green'))
        {
            role = obj.querySelector('#player_role').textContent
            if(role=='WK') wk_two_cnt++
            else if(role=='BAT') bat_two_cnt++
            else if(role=='AL') al_two_cnt++
            else bowl_two_cnt++
            total_two_cnt++
        }
    })
    wk_one_ele = document.querySelector('#first_wk')
    bat_one_ele = document.querySelector('#first_bat')
    al_one_ele = document.querySelector('#first_al')
    bowl_one_ele = document.querySelector('#first_bowl')
    total_one_ele = document.querySelector('#first_total')
    wk_one_ele.innerHTML='<span style="color:green";>'+wk_one_cnt+'</span>'
    bat_one_ele.innerHTML='<span style="color:green";>'+bat_one_cnt+'</span>'
    al_one_ele.innerHTML='<span style="color:green";>'+al_one_cnt+'</span>'
    bowl_one_ele.innerHTML='<span style="color:green";>'+bowl_one_cnt+'</span>'
    total_one_ele.innerHTML='<span style="color:green";>'+total_one_cnt+'</span>'
    //---------
    wk_two_ele = document.querySelector('#second_wk')
    bat_two_ele = document.querySelector('#second_bat')
    al_two_ele = document.querySelector('#second_al')
    bowl_two_ele = document.querySelector('#second_bowl')
    total_two_ele = document.querySelector('#second_total')
    wk_two_ele.innerHTML='<span style="color:green";>'+wk_two_cnt+'</span>'
    bat_two_ele.innerHTML='<span style="color:green";>'+bat_two_cnt+'</span>'
    al_two_ele.innerHTML='<span style="color:green";>'+al_two_cnt+'</span>'
    bowl_two_ele.innerHTML='<span style="color:green";>'+bowl_two_cnt+'</span>'
    total_two_ele.innerHTML='<span style="color:green";>'+total_two_cnt+'</span>'

    //------
    wk_final_ele = document.querySelector('#final_wk')
    bat_final_ele = document.querySelector('#final_bat')
    al_final_ele = document.querySelector('#final_al')
    bowl_final_ele = document.querySelector('#final_bowl')
    total_final_ele = document.querySelector('#final_total')
    wk_final_ele.innerHTML='<span style="color:green";>'+(wk_one_cnt+wk_two_cnt)+'</span>'
    bat_final_ele.innerHTML='<span style="color:green";>'+(bat_two_cnt+bat_one_cnt)+'</span>'
    al_final_ele.innerHTML='<span style="color:green";>'+(al_two_cnt+al_one_cnt)+'</span>'
    bowl_final_ele.innerHTML='<span style="color:green";>'+(bowl_two_cnt+bowl_one_cnt)+'</span>'
    total_final_ele.innerHTML='<span style="color:green";>'+(total_two_cnt+total_one_cnt)+'</span>'
}
