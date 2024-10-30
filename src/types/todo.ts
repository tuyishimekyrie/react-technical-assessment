// {
//     "todos": [
//       {
//         "id": 1,
//         "todo": "Do something nice for someone I care about",
//         "completed": true,
//         "userId": 26
//       },
//       {...},
//       {...}
//       // 30 items
//     ],
//     "total": 150,
//     "skip": 0,
//     "limit": 30
//   }

export interface todo {
    id: number;
    todo: string;
    completed:boolean;
    userId:string
}