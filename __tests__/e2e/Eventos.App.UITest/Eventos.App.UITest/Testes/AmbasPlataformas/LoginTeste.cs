using Eventos.App.UITest.Infraestrutura;
using Eventos.App.UITest.Infraestrutura.Support;
using Eventos.App.UITest.Paginas;
using NUnit.Framework;
using Xamarin.UITest;

namespace Eventos.App.UITest.Tests.Android
{
    public class LoginTeste: TesteBase
    {
        public LoginTeste(Platform plataforma)
             : base(plataforma) { }
        
        [Test, AlwaysRetryAttribute]
        public void Deve_Realizar_Login_Usuario()
        {
            if (!OniOS)
            {
                new PaginaEntrada()
                    .ClicaBotaoEntrar();
                new PaginaLogin()
                    .RealizarLogin("94409287001", "121122");
                new PaginaHome()
                    .FecharModal()
                    .ClicaEmServicos();
                new PaginaServico()
                    .ClicarEmPagamentos();
                new PaginaBoleto()
                    .VerificaSeAbriuTelaPagamentoBoleto();

            }
        }
    }
}
