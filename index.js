const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      var x;
      var over_due=[];
      for (x=0;x<all.length;x++){
        if (all[x]['dueDate']<today){
          over_due.push(all[x]);
        }
      }
      return over_due
    }
  
    const dueToday = () => {
      var x;
      var due_today=[];
      for (x=0;x<all.length;x++){
        if(all[x]['dueDate']===today){
          due_today.push(all[x]);
        }
      }
      return due_today;
    }
  
    const dueLater = () => {
      var x;
      var due_later=[];
      for (x=0;x<all.length;x++){
        if (all[x]['dueDate']>today){
          due_later.push(all[x]);
        }
      }
      return due_later;
    }
  
    const toDisplayableList = (list) => {
      var result = ""
      for (let index = 0; index < list.length; index++) {
        
        
        if(list[index]['dueDate']!=today){
          if(list[index]['completed']==true){
            result += '[x] '+list[index]['title']+" "+list[index]['dueDate']
          }
          else{
            result+='[ ] '+list[index]['title']+" "+list[index]['dueDate']
          }
        }
        else{
          if(list[index]['completed']==true){
            result += '[x] '+list[index]['title']
          }
          else{
            result+='[ ] '+list[index]['title']
          }
        }
        if(index<list.length-1 && list.length>1){
          result+="\n"
        }
      }
      return result
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")