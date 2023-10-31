import './App.css';

function Sidebar(){
    return (
            <div class="sidebar">
                <a href="/index"><button>Courses</button></a> 
                <a href="/students"><button>Students</button></a>
                <a href="/teachers"><button>Teachers</button></a>
                <a href="/profile"><button>Settings</button></a> 
            </div>
    );
}
export default Sidebar;