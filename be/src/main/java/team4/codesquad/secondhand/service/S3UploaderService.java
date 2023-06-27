package team4.codesquad.secondhand.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import team4.codesquad.secondhand.configuration.S3Properties;

import java.io.IOException;
import java.util.UUID;

@Service
@Component
@RequiredArgsConstructor
public class S3UploaderService {

    private final AmazonS3 amazonS3;
    private final S3Properties s3Properties;

    @Value("${aws.bucketFolderPath}")
    private String filePath;

    public String upload(MultipartFile multipartFile) {
        String s3FileName = generateS3FileName(multipartFile.getOriginalFilename());
        ObjectMetadata objMeta = createObjectMetadata(multipartFile);

        try {
            amazonS3.putObject(s3Properties.getS3().getBucket() + filePath, s3FileName, multipartFile.getInputStream(), objMeta);
            return generateS3FileUrl(s3FileName);
        } catch (IOException e) {
            throw new IllegalStateException("Upload failed", e);
        }
    }

    private String generateS3FileName(String originalFilename) {
        return UUID.randomUUID() + "-" + originalFilename;
    }

    private ObjectMetadata createObjectMetadata(MultipartFile multipartFile) {
        ObjectMetadata objMeta = new ObjectMetadata();
        objMeta.setContentType(multipartFile.getContentType());
        objMeta.setContentLength(multipartFile.getSize());
        return objMeta;
    }

    private String generateS3FileUrl(String s3FileName) {
        return amazonS3.getUrl(s3Properties.getS3().getBucket() + filePath, s3FileName).toString();
    }

}
