<script type="text/javascript">
            $("#IDPLogin").submit(function (event) {
                var publickey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4uXLiTp93Z2T+CvJVa9o4fkBXVZERBkoA5Dp/WSQv8Ab0/SAbi8+nMs+NMSJ+LYg+yoLwWWEV4dh0NFQrdEURr05L88fp5PcZsnCUEURavH1Qbh0SIYY5ad7GU2y3O03xemRXnPZlARk/8FFfsHVjlVKZR2K2tutAxI3A8VJi2CrK2Go6QsLfcjhxM8Ttd1lMhN+/bMX3bkbE8WykYsokjLuNCSL57MyYugj6++K3am1vA/Eizzn8zzmlHNPaC6nvD8vIkdIViwXCj56ykCXMCpibkV3UfIFgKI9zmJ2EEDXuaBVgeRDOsE0kYv0i/c6uWAhZzK3RhyqFbfQZpho0wIDAQAB";

                // Encrypt with the public key...
                var encrypter = new JSEncrypt();
                encrypter.setPublicKey(publickey);

                if ($("<USER>").val() !== "") {
                    var userEncrypted = encrypter.encrypt($("<USER>").val());
                    $("<USER>_Hidden").val(userEncrypted);
                    $("<USER>").val("");

                }

                if ($("<PASS>").val() !== "") {
                    var passwordEncrypted = encrypter.encrypt($("<PASS>").val());
                    $("<PASS>_Hidden").val(passwordEncrypted);
                    $("<PASS>").val("");
                }

                if ($("#FBemail").val() !== "") {
                    var FBemailEncrypted = encrypter.encrypt($("#FBemail").val());
                    $("#FBemail").val(FBemailEncrypted);
                }

                if ($("#GSemail").val() !== "") {
                    var GSemailEncrypted = encrypter.encrypt($("#GSemail").val());
                    $("#GSemail").val(GSemailEncrypted);
                }
                

            });
            
            
            $("#IDPChangePwd").submit(function (event) {
                var publickey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4uXLiTp93Z2T+CvJVa9o4fkBXVZERBkoA5Dp/WSQv8Ab0/SAbi8+nMs+NMSJ+LYg+yoLwWWEV4dh0NFQrdEURr05L88fp5PcZsnCUEURavH1Qbh0SIYY5ad7GU2y3O03xemRXnPZlARk/8FFfsHVjlVKZR2K2tutAxI3A8VJi2CrK2Go6QsLfcjhxM8Ttd1lMhN+/bMX3bkbE8WykYsokjLuNCSL57MyYugj6++K3am1vA/Eizzn8zzmlHNPaC6nvD8vIkdIViwXCj56ykCXMCpibkV3UfIFgKI9zmJ2EEDXuaBVgeRDOsE0kYv0i/c6uWAhZzK3RhyqFbfQZpho0wIDAQAB";

                // Encrypt with the public key...
                var encrypter = new JSEncrypt();
                encrypter.setPublicKey(publickey);
                
                if ($("#changePassword").val() !== "") {
                    var changePasswordEncrypted = encrypter.encrypt($("#changePassword").val());
                    $("#changePassword").val(changePasswordEncrypted);
                }
                if ($("#changePasswordConfirm").val() !== "") {
                    var changePasswordConfirmEncrypted = encrypter.encrypt($("#changePasswordConfirm").val());
                    $("#changePasswordConfirm").val(changePasswordConfirmEncrypted);
                }
                
            });
        </script>
