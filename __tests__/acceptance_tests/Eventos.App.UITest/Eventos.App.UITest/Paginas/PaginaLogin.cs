using System.Linq;
using Eventos.App.UITest.Infraestrutura;
using Query = System.Func<Xamarin.UITest.Queries.AppQuery, Xamarin.UITest.Queries.AppQuery>;

namespace Eventos.App.UITest.Paginas
{
    public class PaginaLogin:PaginaBase
    {

        readonly Query campoCPF;
        readonly Query botaoEntrar;

        protected override ConsultaPlataforma ConfirmaPlataforma => new ConsultaPlataforma
        {
            Android = x => x.Id("username")
        };

        public PaginaLogin()
        {
            if (OnAndroid)
            {
                campoCPF = x => x.Id("username");
                botaoEntrar = x => x.Id("enter");
                
            }

            if (OniOS)
            {

            }
        }

        public PaginaLogin RealizarLogin(string usuario, string senha)
        {
           
            App.EnterText(campoCPF, usuario);

            var separandoSenhaEmCaracteres = senha.ToCharArray();
            separandoSenhaEmCaracteres.ToList().ForEach(digitoSenha => IdentificarBotoesComDigitoDaSenha(digitoSenha));

            App.Tap(botaoEntrar);
            return this;
        }

        public void IdentificarBotoesComDigitoDaSenha(char digitoSenha)
        {
            Query procuraBotaoComDigitosSenha;

            var botaoSenha = App.Query(procuraBotaoComDigitosSenha = x => x.Property("text").Contains(digitoSenha.ToString()));

            botaoSenha.ToList().ForEach(botao =>
            {
                if (botao.Text.Contains(digitoSenha.ToString()) && botao.Class == "androidx.appcompat.widget.AppCompatButton")
                {
                    App.Tap(botao.Id);
                }
            });
        }
    }
}
