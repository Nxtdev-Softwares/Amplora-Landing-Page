// import Message from "../components/views/Message";
// import ChatRoomChat from "../components/views/ChatRoomChat";
import api from "./api";
import ProjectCardAdmin from "../components/ProjectCardAdmin";



// export const getDiscussions = (
// {    setMobileProjectRef, 
//     setDesktopProjectRef, 
//     setWebProjectRef, 
//     enableMobileRef,
//     enableWebRef,
//     enableDesktopRef,
//     setCurrentTitleRef,
//     setActiveOrderRef,
//     setStartDateRef,
//     setEndDateRef}
//     ) => {
//     const _components_ = []
//     api.get("/api/v1/user/projects/chat/get_discussions").then(response => {
//         if (response.status === 200){
//             const data = response.data;
//             data.forEach(element => {
//                 _components_.push(<ChatRoomChat 
//                     title={element.name} 
//                     id={element.id}
//                     key={element.id}
//                     startDate={element.start_date}
//                     endDate={element.end_date}
//                     projects={element.projects} 
//                     activateMobileProject={setMobileProjectRef}
//                     activateDesktopProject={setDesktopProjectRef}
//                     activateWebProject={setWebProjectRef}
//                     activateMobile={enableMobileRef} 
//                     activateWeb={enableWebRef} 
//                     activateDesktop={enableDesktopRef}
//                     setTitle={setCurrentTitleRef}
//                     setActiveOrder={setActiveOrderRef}
//                     setStartDate={setStartDateRef}
//                     setEndDate={setEndDateRef}
//                     />);
//             });
//             // setChatDiscussionsRef(_components_);
//             // _components_ = components;
//         }
//     });
//     // console.log(_components_);
//     return _components_;
// }


// export const getChats = (discussionId, projectID) => {
//     const components = [];
//     if (projectID !== null && discussionId !== null){
//         api.post("/api/v1/chat/get/project/active", {activeChat: 1, order_: discussionId, project: projectID}).then(response => {
//             if (response.status === 200){
//                 const data = response.data;
//                 data.forEach(element => {
//                     components.push(<Message from="Me" message={element.message} datetime={element.date_time}
//                     />)
//                 });
//             }
//         });
//     }
//     return components;
// }


export const getAllProjects = async(keyword) =>{
    const response = await api.get("/api/v1/admin/projects/get/all" + (keyword != null ? "?search=" + keyword : ""));
    const elements = []
    if (response.status === 200){
        const data = response.data;
        console.log(data.status);
        if (data.status == "ok"){
            const order_list = data["projects"];
            console.log(data);
            order_list.forEach((element) => {
                const projects = element.projects;
                projects.forEach((element) => {
                    elements.push(element);
                });
            });
        }
    }
    console.log(elements);
    return elements;
}