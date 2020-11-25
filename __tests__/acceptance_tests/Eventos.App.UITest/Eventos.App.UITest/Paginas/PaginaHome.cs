using Eventos.App.UITest.Infraestrutura;
using Query = System.Func<Xamarin.UITest.Queries.AppQuery, Xamarin.UITest.Queries.AppQuery>;

namespace Eventos.App.UITest.Paginas
{
    public class PaginaHome : PaginaBase
    {
        readonly Query botaoServico;
        readonly Query botaoFecharModal;

        public PaginaHome()
        {
            if (OnAndroid)
            {
                botaoServico = x => x.Id("navigation_checking_account");
                botaoFecharModal = x => x.Id("close");

            }
        }

        protected override ConsultaPlataforma ConfirmaPlataforma => new ConsultaPlataforma
        {
            Android = x => x.Id("navigation_checking_account")
        };

        public PaginaHome FecharModal()
        {
            App.WaitForElement(botaoFecharModal);
            App.Tap(botaoFecharModal);
            return this;
        }
        public PaginaHome ClicaEmServicos()
        {
            App.WaitForElement(botaoServico);
            App.Tap(botaoServico);
            return this;
        }
    }
}
