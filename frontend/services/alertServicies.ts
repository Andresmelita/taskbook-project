import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const successAlert = () => {
    Swal.fire({
        toast: true,
        title: 'Signed in successfully',
        icon: 'success',
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
};

const successLogout = () => {
    Swal.fire({
        toast: true,
        title: 'See you soon!',
        icon: 'success',
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        width: 300,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
};

export { successAlert, successLogout };
