using System.Configuration;

namespace Eventos.App.UITest.ConfiguracaoAplicativo
{

    public static class ConfiguracaoAplicativo
    {
        public static Dispositivo DeviceConfiguration { get; } =
            new Dispositivo() {
                Serial = ConfigurationManager.AppSettings["Serial"]
            };
    
        public static CaminhoAplicativoCompilado CaminhoAplicativoCompilado { get; } =
            new CaminhoAplicativoCompilado()
            {
                Android = ConfigurationManager.AppSettings["AndroidApk"],
                IOS = ConfigurationManager.AppSettings["IOSApk"]
            };
    }

    public class CaminhoAplicativoCompilado
    {
        public string Android;
        public string IOS;
    }
    public class Dispositivo
    {
        public string Serial;
    }
}
