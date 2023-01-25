import { rest } from "msw";
// console.log("setupServer----------")

export const handlers = () =>[
    // rest.get('https://api.publicapis.org/entries',(req, res, ctx)=>{
    //     return res(
    //         ctx.status(200),
    //         ctx.json([
    //             {
    //                 API : 'AdoptAPet',
                    
    //             },
    //             {
    //                 API : 'Axolotl',
                    
    //             },
    //             {
    //                 API : 'Cat Facts',
                    
    //             }
    //         ])
    //     )
    // })
    rest.get('https://pokeapi.co/api/v2/pokemon?limit=10',(req, res, ctx)=>{
        return res(ctx.status(200),
            ctx.json([
                    {name: 'bulbasaur'},
                    {name: 'ivysaur'},
                    {name: 'venusaur'}
            ])
        )
    })
] 