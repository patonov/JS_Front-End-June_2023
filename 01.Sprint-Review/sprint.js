function solve(input){
    let ticketLines = Number(input.shift());
    let tickets = input.slice(0, ticketLines);
    let commands = input.slice(ticketLines);

    const board = tickets.reduce((acc, curr) => {
        const [assignee, taskId, title, status, points] = curr.split(":");

        if(!acc.hasOwnProperty(assignee)){
            acc[assignee] = [];
        }

        acc[assignee].push({assignee, taskId, title, status, points: Number(points)});

        return acc;
    }, {});

    const commandRunner = {
        "Add New": AddNewTaskFunc,
        "Change Status": ChangeStatusFunc,
        "Remove Task": RemoveTaskFunc,
    };

    commands.forEach(command => {
        const [commandName, ...rest] = command.split(":");
        commandRunner[commandName](...rest);
    });

    function AddNewTaskFunc(assignee, taskId, title, status, points){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
            board[assignee].push({assignee, taskId, title, status, points: Number(points)});
        }
    }

    function ChangeStatusFunc(assignee, taskId, status){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }
        let task = board[assignee].find((t) => t.taskId === taskId);

        if (!task){
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            return;
        }

        task.status = status;
    }

    function RemoveTaskFunc(assignee, index){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        if (index < 0 || index >= board[assignee].length){
            console.log("Index is out of range!");
            return;
        }

        board[assignee].splice(index, 1);
    }
    
    const toDoTaskPoints = StatusPointsCalculator("ToDo");
    const innProgressTaskPoints = StatusPointsCalculator("In Progress");
    const codeReviewTaskPoints = StatusPointsCalculator("Code Review");
    const doneTaskPoints = StatusPointsCalculator("Done");

    console.log(`ToDo: ${toDoTaskPoints}pts`);
    console.log(`In Progress: ${innProgressTaskPoints}pts`);
    console.log(`Code Review: ${codeReviewTaskPoints}pts`);
    console.log(`Done Points: ${doneTaskPoints}pts`);

    if (doneTaskPoints >= toDoTaskPoints + innProgressTaskPoints + codeReviewTaskPoints){
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }

    function StatusPointsCalculator(status){    
      return Object.values(board).reduce((acc, curr) => {
        let boardTotal = curr.filter((t) => t.status === status)
        .reduce((taskTotal, task) => taskTotal + task.points, 0);

        return acc + boardTotal;
        }, 0);
    }


}

solve([ '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]);