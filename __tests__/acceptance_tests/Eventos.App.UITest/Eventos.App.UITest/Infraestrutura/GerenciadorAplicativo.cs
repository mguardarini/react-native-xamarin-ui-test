using System;
using Xamarin.UITest;

namespace Eventos.App.UITest.Infraestrutura
{
    static class GerenciadorAplicativo
    {
        static IApp app;
        public static IApp App
        {
            get
            {
                if (app == null)
                    throw new NullReferenceException("'GerenciadorAplicativo.App' não está configurando 'GerenciadorAplicativo.InicirAplicativo()' depois de tentar acessa-lo.");
                return app;
            }
        }

        static Platform? plataforma;
        public static Platform Plataforma
        {
            get
            {
                if (plataforma == null)
                    throw new NullReferenceException("'GerenciadorAplicativo.Plataforma' não está configurado.");
                return plataforma.Value;
            }

            set
            {
                plataforma = value;
            }
        }

        public static void IniciarAplicativo()
        {
            if (Plataforma == Platform.Android)
            {
                app = ConfigureApp
                    .Android
                    .EnableLocalScreenshots()                   
                    .DeviceSerial(ConfiguracaoAplicativo.ConfiguracaoAplicativo.DeviceConfiguration.Serial)
                    .ApkFile(ConfiguracaoAplicativo.ConfiguracaoAplicativo.CaminhoAplicativoCompilado.Android)
                    .StartApp();
            }

            if (Plataforma == Platform.iOS)
            {
                app = ConfigureApp
                    .iOS
                    .AppBundle(ConfiguracaoAplicativo.ConfiguracaoAplicativo.CaminhoAplicativoCompilado.IOS)
                    .StartApp();
            }
        }
    }
}
