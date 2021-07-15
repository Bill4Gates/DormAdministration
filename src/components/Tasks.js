import Task from './Task';

const Tasks = ({
  tasks,
  id,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  titleTag1,
  titleTag2,
  titleTag3,
  titleTag4,
  link,
  inputData,
  onOpen,
  onDelete,
  onToggle,
}) => {
  return (
    <>
      {tasks
        .filter((task) => {
          if (
            inputData.text1 === '' &&
            inputData.text2 === '' &&
            inputData.text3 === '' &&
            inputData.text4 === ''
          ) {
            return (
              <Task
                key={eval('task.' + id)}
                id={eval('task.' + id)}
                task={task}
                tag1={eval('task.' + tag1)}
                tag2={eval('task.' + tag2)}
                tag3={eval('task.' + tag3)}
                tag4={eval('task.' + tag4)}
                tag5={eval('task.' + tag5)}
                titleTag1={titleTag1}
                titleTag2={titleTag2}
                titleTag3={titleTag3}
                titleTag4={titleTag4}
                link={link}
                onDelete={onDelete}
                onOpen={onOpen}
                onToggle={onToggle}
              />
            );
          } else if (
            eval('task.' + tag1)
              .toLowerCase()
              .includes(inputData.text1.toLowerCase())
          ) {
            if (
              eval('task.' + tag2)
                .toLowerCase()
                .includes(inputData.text2.toLowerCase())
            ) {
              if (
                eval('task.' + tag3)
                  .toLowerCase()
                  .includes(inputData.text3.toLowerCase())
              ) {
                if (
                  eval('task.' + tag4)
                    .toLowerCase()
                    .includes(inputData.text4.toLowerCase())
                ) {
                  return (
                    <Task
                      key={eval('task.' + id)}
                      id={eval('task.' + id)}
                      task={task}
                      tag1={eval('task.' + tag1)}
                      tag2={eval('task.' + tag2)}
                      tag3={eval('task.' + tag3)}
                      tag4={eval('task.' + tag4)}
                      tag5={eval('task.' + tag5)}
                      titleTag1={titleTag1}
                      titleTag2={titleTag2}
                      titleTag3={titleTag3}
                      titleTag4={titleTag4}
                      link={link}
                      onDelete={onDelete}
                      onOpen={onOpen}
                      onToggle={onToggle}
                    />
                  );
                }
              }
            }
          }
        })
        .map((task) => (
          <Task
            key={eval('task.' + id)}
            id={eval('task.' + id)}
            task={task}
            tag1={eval('task.' + tag1)}
            tag2={eval('task.' + tag2)}
            tag3={eval('task.' + tag3)}
            tag4={eval('task.' + tag4)}
            tag5={eval('task.' + tag5)}
            titleTag1={titleTag1}
            titleTag2={titleTag2}
            titleTag3={titleTag3}
            titleTag4={titleTag4}
            link={link}
            onDelete={onDelete}
            onOpen={onOpen}
            onToggle={onToggle}
          />
        ))}
    </>
  );
};

export default Tasks;
