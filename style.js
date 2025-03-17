function Verificar_Acesso()
{
    var login_correto = "user";
    var senha_correto = "1234";

    var login = document.getElementById('login_user').value;
    var senha = document.getElementById('login_senha').value;

    do
    {
        if(login == login_correto && senha == senha_correto)
        {
            alert("Acesso permitido.");
        }
		else
		{
			alert("Acesso negado.");
		}
    } while (login != login_correto && senha != senha_correto);
}




