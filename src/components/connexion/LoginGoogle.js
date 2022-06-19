import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Abonner from '../../service/Abonner';

const LoginGoogle = () => {

    const [user, setUser] = useState({})

    function handleCallBackResponse (response) {
        var userInfo = jwt_decode(response.credential);
        setUser(userInfo);
        document.getElementById("signInDiv").hidden = true;

        const abonner = {
            email: userInfo.email,
            nom: userInfo.name,
            photo: userInfo.picture,
            headline: "",
            website: "",
        }
        if (user) {
            Abonner.abonneer_exist(userInfo.email).then(res => {
                if (res.data === false) {
                    Abonner.connexion(abonner).then(res => {
                    })
                    navigation()
                } else {
                    navigation()
                }
            })
            localStorage.setItem("email", userInfo.email);
            localStorage.setItem("photo", userInfo.picture);
            //navigation()

        }
    }

    function handleSignOut (e) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        localStorage.removeItem("email");
    }


    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: "152823334206-2bp6dl3pj3o67d5hk8oj1ojvdl95l41m.apps.googleusercontent.com",
            callback: handleCallBackResponse,//here is the callback function
            auto_select: false,//here is the auto select
        });
        window.google.accounts.id.renderButton(
            document.getElementById('signInDiv'), {
            them: "outline", size: "medium",
        })
        window.google.accounts.id.prompt();
    }, []);

    let navigate = useNavigate()
    const navigation = () => {
        navigate("/new")
    }

    return (
        <div>
            <div id="signInDiv"></div>
            {Object.keys(user).length != 0 &&
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}
        </div>
    );
};

export default LoginGoogle; 