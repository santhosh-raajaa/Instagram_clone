import {USERS} from './users'

export const POSTS=[
    {
        image:'https://imgr.search.brave.com/QXtedBpLnWZ24OwTY54ZrQYonCA_6r9NVKLJbp4G-dI/fit/844/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/eGhxX0x2TDR0N3ly/V2VocU95UWp3SGFF/SyZwaWQ9QXBp',
        user:USERS[0].user,
        profile_pic:USERS[0].image,
        likes:750,
        caption:'rock hard',
        comments:[
            {
                user:'fake id 1',
                comment:'lol, that was hilarious',
            },
            {
                user:'fake id 2',
                comment:"nah ,that's too boring",
            },
        ]
            
        
    },
    {
        image:'https://imgr.search.brave.com/9t8YuF4LxZHIV4rbfQJs4hnpnLE3368mkpY_DVIEYjw/fit/649/225/ce/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/bm9haThWX1VRY2V4/NUduOHF5X3F3SGFG/YSZwaWQ9QXBp',
        user:USERS[1].user,
        profile_pic:USERS[1].image,
        likes:1700,
        caption:'rock roll🤣',
        comments:[
            {
                user:'fake id 1',
                comment:'lol, that was hilarious',
            },
            {
                user:'fake id 2',
                comment:"nah ,that's too boring",
            },
        ]
            
        
    },


]