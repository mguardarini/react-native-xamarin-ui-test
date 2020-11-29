using System;
using NUnit.Framework;
using Xamarin.UITest;

namespace Eventos.App.UITest.Infraestrutura
{
    public abstract class PaginaBase
    {
        protected IApp App => GerenciadorAplicativo.App;
        protected bool OnAndroid => GerenciadorAplicativo.Plataforma == Platform.Android;
        protected bool OniOS => GerenciadorAplicativo.Plataforma == Platform.iOS;

        protected abstract ConsultaPlataforma ConfirmaPlataforma { get; }

        protected PaginaBase()
        {
            ConfirmaQueEstaNaPaginaCorreta(TimeSpan.FromSeconds(30));
            App.Screenshot("On " + GetType().Name);
        }

        protected void ConfirmaQueEstaNaPaginaCorreta(TimeSpan? tempoExpiracao = default)
        {
            var mensagem = "Elemento indisponivel para verificar: " + GetType().Name;

            if (tempoExpiracao == null)
                Assert.IsNotEmpty(App.Query(ConfirmaPlataforma.Atual), mensagem);
            else
                Assert.DoesNotThrow(() => App.WaitForElement(ConfirmaPlataforma.Atual, timeout: tempoExpiracao), mensagem);
        }

        protected void AguardaPaginaParaSair(TimeSpan? tempoExpiracao = default)
        {
            tempoExpiracao = TimeSpan.FromSeconds(5);
            var mensagem = "Impossivel verificar pagina: " + GetType().Name;

            Assert.DoesNotThrow(() => App.WaitForNoElement(ConfirmaPlataforma.Atual, timeout: tempoExpiracao), mensagem);
        }
    }
}
