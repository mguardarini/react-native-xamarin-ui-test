using NUnit.Framework;
using Xamarin.UITest;

namespace Eventos.App.UITest.Infraestrutura
{
    [TestFixture(Platform.Android)]
    [TestFixture(Platform.iOS)]
    public abstract class TesteBase
    {
        protected IApp App => GerenciadorAplicativo.App;
        protected bool OnAndroid => GerenciadorAplicativo.Plataforma == Platform.Android;
        protected bool OniOS => GerenciadorAplicativo.Plataforma == Platform.iOS;

        protected TesteBase(Platform plataforma)
        {
            GerenciadorAplicativo.Plataforma = plataforma;
        }

        [SetUp]
        public virtual void BeforeEachTest()
        {
            GerenciadorAplicativo.IniciarAplicativo();
        }
    }
}
