import "./App.css";
import "boxicons";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

function App() {
    Swal.fire({
        title: "Hello world!",
        text: "This is a simple alert!",
        icon: "success",
        confirmButtonText: "Cool",
    });

    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <box-icon name="like" color="white" size="lg"></box-icon>
            <i className="fas fa-kitchen-set"></i>
            <BeakerIcon className="size-6 text-blue-500" />
            <div className="carousel carousel-vertical rounded-box h-96">
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
                </div>
            </div>
        </>
    );
}

export default App;
