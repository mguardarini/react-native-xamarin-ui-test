using System;
using Xamarin.UITest;
using Xamarin.UITest.Queries;

namespace Eventos.App.UITest.Infraestrutura
{
    public class ConsultaPlataforma
    {
        public Func<AppQuery, AppQuery> Android
        {
            set
            {
                if (GerenciadorAplicativo.Plataforma == Platform.Android)
                    current = value;
            }
        }

        public Func<AppQuery, AppQuery> iOS
        {
            set
            {
                if (GerenciadorAplicativo.Plataforma == Platform.iOS)
                    current = value;
            }
        }

        Func<AppQuery, AppQuery> current;
        public Func<AppQuery, AppQuery> Atual
        {
            get
            {
                if (current == null)
                    throw new NullReferenceException("Plataforma atual não está configurada.");

                return current;
            }
        }
    }
}
